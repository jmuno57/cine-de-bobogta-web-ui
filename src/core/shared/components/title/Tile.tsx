import React from 'react'

interface TitlePros {
    title?: string
    subtitle?: string
    desc?: string
}

export const Title: React.FC<TitlePros> = ({ title, subtitle, desc }) => {
    return (
        <>
            {title && (
                <div className="container-title" style={{ color: '#000000' }}>
                    <label className="sherpa-spacing-7 sherpa-typography-heading-5 sherpa-carbon-900 align-center">{title}</label>
                </div>
            )}
            {subtitle && (
                <div className="container-title" style={{ color: '#444444' }}>
                    <label className="sherpa-spacing-7 sherpa-typography-heading-8 sherpa-carbon-900 align-center">{subtitle}</label>
                </div>
            )}
            {desc && (
                <div className="container-body" style={{ color: '#5C5C5C', marginTop: '12px' }}>
                    <label className="sherpa-spacing-7 sherpa-typography-paragraph-M sherpa-carbon-900 align-center">{desc}</label>
                </div>
            )}
        </>
    )
}
