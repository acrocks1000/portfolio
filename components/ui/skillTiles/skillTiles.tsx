import { Tile } from "./tile"

export function SkillTiles({skills}: {skills: string[]}) {
    return (
        <div className="tiles grid grid-rows-1 grid-cols-4">
            {
                skills.map((skill, index) => {
                    return <Tile key={index} icon={skill}></Tile>
                })
            }
        </div>
    )
}