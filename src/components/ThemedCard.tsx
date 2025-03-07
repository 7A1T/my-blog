import { ReactNode } from 'react';

interface ThemedCardProps {
  title: string;
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
}

export default function ThemedCard({ 
  title, 
  children, 
  variant = 'default' 
}: ThemedCardProps) {
  // Define styles based on variant
  const getStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          header: {
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-surface)'
          },
          body: {
            borderColor: 'var(--color-primary-light)'
          }
        };
      case 'secondary':
        return {
          header: {
            backgroundColor: 'var(--color-secondary)',
            color: 'var(--color-surface)'
          },
          body: {
            borderColor: 'var(--color-secondary-light)'
          }
        };
      case 'accent':
        return {
          header: {
            backgroundColor: 'var(--color-accent)',
            color: 'var(--color-surface)'
          },
          body: {
            borderColor: 'var(--color-neutral)'
          }
        };
      default:
        return {
          header: {
            backgroundColor: 'var(--color-neutral)',
            color: 'var(--color-text)'
          },
          body: {
            borderColor: 'var(--color-neutral-light)'
          }
        };
    }
  };

  const styles = getStyles();

  return (
    <div 
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: `0 4px 6px var(--shadow-color)`,
      }}
    >
      <div 
        style={styles.header}
        className="p-4 font-medium"
      >
        {title}
      </div>
      <div 
        style={{
          borderWidth: '0 1px 1px 1px',
          borderStyle: 'solid',
          borderColor: styles.body.borderColor,
        }}
        className="p-4"
      >
        {children}
      </div>
    </div>
  );
}