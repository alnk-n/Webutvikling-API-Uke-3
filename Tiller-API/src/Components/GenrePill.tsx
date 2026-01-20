interface GenrePillProps {
  name: string;
}

function GenrePill({ name }: GenrePillProps) {
  return (
    <div className="bg-gray-700 text-gray-400 mr-3 uppercase text-xs px-2 py-1 rounded-full">
      <span>{name}</span>
    </div>
  )
}

export default GenrePill