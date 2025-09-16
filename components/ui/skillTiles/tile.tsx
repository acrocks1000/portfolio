export function Tile({ icon }: { icon: string }) {
  return (
    <div>
      <div className="tile w-30 h-30">
        <svg viewBox="-15 -15 125 125" className="w-full h-full">
          <polygon
            points="50,3 93,25 93,75 50,97 7,75 7,25"
            className=" stroke-white stroke-2 transition-[filter,stroke-width] duration-200"
          />
          <foreignObject x="15" y="20" width="70" height="60">
            <div className="w-full h-full flex items-center justify-center text-sm text-white">
              tile for {icon}
            </div>
          </foreignObject>
        </svg>

        <style jsx>{`
          .tile:hover svg polygon {
            filter: drop-shadow(0 0 12px rgba(99, 102, 241, 0.9))
              drop-shadow(0 0 6px rgba(99, 102, 241, 0.55));
            stroke-width: 2.5;
          }
        `}</style>
      </div>
    </div>
  );
}
