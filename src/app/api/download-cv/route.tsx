import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

// Simple rate limiting implementation using a Map
const rateLimit = new Map<string, { count: number; timestamp: number }>()
const WINDOW_MS = 15 * 60 * 1000 // 15 minutes
const MAX_REQUESTS = 5

export async function GET(request: Request) {
    try {
        // Get IP address from request
        const ip = request.headers.get('x-forwarded-for') || 'unknown'
        
        // Check rate limit
        const now = Date.now()
        const userLimit = rateLimit.get(ip)
        
        if (userLimit) {
            if (now - userLimit.timestamp < WINDOW_MS) {
                if (userLimit.count >= MAX_REQUESTS) {
                    return NextResponse.json(
                        { message: 'Too many download attempts, please try again later.' },
                        { status: 429 }
                    )
                }
                userLimit.count++
            } else {
                userLimit.count = 1
                userLimit.timestamp = now
            }
        } else {
            rateLimit.set(ip, { count: 1, timestamp: now })
        }

        const filePath = path.join(process.cwd(), 'public/files/Lucas de Souza Silva Lima - CV.pdf')
        const fileBuffer = fs.readFileSync(filePath)

        // Create response with appropriate headers
        const response = new NextResponse(fileBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="Lucas_Lima_CV.pdf"',
            },
        })

        return response
    } catch (error) {
        console.error('Download error:', error)
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        )
    }
}