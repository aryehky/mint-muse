export function PlaceholderImage({ name }: { name: string }) {
  // Generate a random pastel color based on the collection name
  const stringToColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Generate pastel colors
    const h = hash % 360;
    return `hsl(${h}, 70%, 80%)`;
  };

  const bgColor = stringToColor(name);

  return (
    <div 
      className="w-full h-full flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <span className="text-2xl font-display text-gray-700">
        {name.split(' ').map(word => word[0]).join('')}
      </span>
    </div>
  );
} 