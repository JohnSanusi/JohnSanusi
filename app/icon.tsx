/*import { ImageResponse } from 'next/og'

export const size = {
    width: 48,
    height: 48,
}

export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#000',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <span
                    style={{
                        color: '#f5f5f7',
                        fontFamily: 'Courier New, monospace',
                        fontWeight: 'bold',
                        fontSize: 28,
                        lineHeight: 1,
                        display: 'flex',
                    }}
                >
                    JS
                </span>
            </div>
        ),
        {
            ...size,
        }
    )
}*/

import { ImageResponse } from 'next/og'

export const size = {
    width: 350,
    height: 350,
}

export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'transparent',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                    }}
                >
                    {/* Left bracket < */}
                    <span
                        style={{
                            color: '#f5f5f5',
                            fontSize: 150,
                            fontWeight: 'bold',
                            lineHeight: 1,
                            display: 'flex',
                        }}
                    >
                        {'<'}
                    </span>

                    {/* JS */}
                    <span
                        style={{
                            color: '#f5f5f5',
                            fontFamily: 'monospace',
                            fontSize: 100,
                            fontWeight: 'bold',
                            lineHeight: 1,
                            display: 'flex',
                        }}
                    >
                        JS
                    </span>

                    {/* Right bracket with slash /> */}
                    <span
                        style={{
                            color: '#f5f5f5',
                            fontSize: 150,
                            fontWeight: 'bold',
                            lineHeight: 1,
                            display: 'flex',
                        }}
                    >
                        {'/'}
                        {'>'}
                    </span>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
