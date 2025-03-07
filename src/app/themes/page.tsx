import ThemeSwitcher from '@/components/ThemeSwitcher';
import ThemedCard from '@/components/ThemedCard';

export default function Home() {
  return (
    <main style={{ backgroundColor: 'var(--color-neutral-light)' }} className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <header 
          style={{
            backgroundColor: 'var(--color-surface)',
            borderRadius: 'var(--radius-md)',
            boxShadow: `0 2px 4px var(--shadow-color)`,
          }}
          className="flex justify-between items-center p-4 mb-8"
        >
          <h1 style={{ color: 'var(--color-text)' }} className="text-2xl font-bold">Theme Showcase</h1>
          <ThemeSwitcher />
        </header>
        
        <div className="grid gap-6">
          <ThemedCard title="Primary Colors" variant="primary">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-20 rounded-md flex items-center justify-center text-white" 
                   style={{ backgroundColor: 'var(--color-primary)' }}>
                Primary
              </div>
              <div className="h-20 rounded-md flex items-center justify-center" 
                   style={{ 
                     backgroundColor: 'var(--color-primary-light)',
                     color: 'var(--color-text)'
                   }}>
                Primary Light
              </div>
              <div className="h-20 rounded-md flex items-center justify-center text-white" 
                   style={{ backgroundColor: 'var(--color-primary-dark)' }}>
                Primary Dark
              </div>
            </div>
          </ThemedCard>
          
          <ThemedCard title="Secondary Colors" variant="secondary">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-20 rounded-md flex items-center justify-center text-white" 
                   style={{ backgroundColor: 'var(--color-secondary)' }}>
                Secondary
              </div>
              <div className="h-20 rounded-md flex items-center justify-center" 
                   style={{ 
                     backgroundColor: 'var(--color-secondary-light)',
                     color: 'var(--color-text)'
                   }}>
                Secondary Light
              </div>
              <div className="h-20 rounded-md flex items-center justify-center text-white" 
                   style={{ backgroundColor: 'var(--color-secondary-dark)' }}>
                Secondary Dark
              </div>
            </div>
          </ThemedCard>
          
          <ThemedCard title="UI Components" variant="accent">
            <div className="space-y-6">
              <div>
                <h3 style={{ color: 'var(--color-text)' }} className="mb-3 font-medium">Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <button 
                    style={{
                      backgroundColor: 'var(--color-primary)',
                      color: 'white',
                      borderRadius: 'var(--radius-md)',
                    }}
                    className="px-4 py-2 hover:opacity-90"
                  >
                    Primary Button
                  </button>
                  <button 
                    style={{
                      backgroundColor: 'var(--color-secondary)',
                      color: 'white',
                      borderRadius: 'var(--radius-md)',
                    }}
                    className="px-4 py-2 hover:opacity-90"
                  >
                    Secondary Button
                  </button>
                  <button 
                    style={{
                      borderColor: 'var(--color-primary)',
                      color: 'var(--color-primary)',
                      borderRadius: 'var(--radius-md)',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                    }}
                    className="px-4 py-2 hover:opacity-90"
                  >
                    Outline Button
                  </button>
                </div>
              </div>
              
              <div>
                <h3 style={{ color: 'var(--color-text)' }} className="mb-3 font-medium">Alerts</h3>
                <div className="space-y-3">
                  <div 
                    style={{
                      backgroundColor: 'var(--color-success)',
                      color: 'white',
                      borderRadius: 'var(--radius-md)',
                    }}
                    className="p-4"
                  >
                    Success Alert: Your data has been saved successfully.
                  </div>
                  <div 
                    style={{
                      backgroundColor: 'var(--color-error)',
                      color: 'white',
                      borderRadius: 'var(--radius-md)',
                    }}
                    className="p-4"
                  >
                    Error Alert: There was a problem processing your request.
                  </div>
                  <div 
                    style={{
                      backgroundColor: 'var(--color-warning)',
                      color: 'white',
                      borderRadius: 'var(--radius-md)',
                    }}
                    className="p-4"
                  >
                    Warning Alert: Your account is approaching storage limits.
                  </div>
                  <div 
                    style={{
                      backgroundColor: 'var(--color-info)',
                      color: 'white',
                      borderRadius: 'var(--radius-md)',
                    }}
                    className="p-4"
                  >
                    Info Alert: System maintenance scheduled for this weekend.
                  </div>
                </div>
              </div>
              
              <div>
                <h3 style={{ color: 'var(--color-text)' }} className="mb-3 font-medium">Form Elements</h3>
                <div className="space-y-3">
                  <div>
                    <label 
                      style={{ color: 'var(--color-text)' }}
                      className="block mb-1"
                    >
                      Input Field
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter some text"
                      style={{
                        backgroundColor: 'var(--color-surface)',
                        borderColor: 'var(--color-neutral-dark)',
                        color: 'var(--color-text)',
                        borderRadius: 'var(--radius-md)',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                      }}
                      className="w-full p-2 focus:outline-none focus:ring-2"
                    />
                  </div>
                  <div>
                    <label
                      style={{ color: 'var(--color-text)' }}
                      className="block mb-1"
                    >
                      Select Dropdown
                    </label>
                    <select 
                      style={{
                        backgroundColor: 'var(--color-surface)',
                        borderColor: 'var(--color-neutral-dark)',
                        color: 'var(--color-text)',
                        borderRadius: 'var(--radius-md)',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                      }}
                      className="w-full p-2 focus:outline-none focus:ring-2"
                    >
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </ThemedCard>
        </div>
      </div>
    </main>
  );
}