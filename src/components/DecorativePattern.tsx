import { cn } from '@/lib/utils';

interface PatternProps {
    variant?: 'dots' | 'grid' | 'diagonal' | 'geometric';
    className?: string;
    opacity?: number;
}

const DecorativePattern = ({ variant = 'dots', className, opacity = 0.1 }: PatternProps) => {
    const patterns = {
        dots: {
            backgroundImage: `radial-gradient(circle, rgba(212, 175, 55, ${opacity}) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
        },
        grid: {
            backgroundImage: `
        linear-gradient(rgba(26, 54, 93, ${opacity}) 1px, transparent 1px),
        linear-gradient(90deg, rgba(26, 54, 93, ${opacity}) 1px, transparent 1px)
      `,
            backgroundSize: '40px 40px',
        },
        diagonal: {
            backgroundImage: `repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(212, 175, 55, ${opacity}) 10px,
        rgba(212, 175, 55, ${opacity}) 20px
      )`,
        },
        geometric: {
            backgroundImage: `
        radial-gradient(circle at 25% 25%, rgba(212, 175, 55, ${opacity}) 2%, transparent 0%),
        radial-gradient(circle at 75% 75%, rgba(26, 54, 93, ${opacity}) 2%, transparent 0%)
      `,
            backgroundSize: '60px 60px',
        },
    };

    return (
        <div
            className={cn('absolute inset-0 pointer-events-none', className)}
            style={patterns[variant]}
            aria-hidden="true"
        />
    );
};

export default DecorativePattern;
