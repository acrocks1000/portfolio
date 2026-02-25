import { Tile } from "./tile"

export function SkillTiles({skills}: {skills: string[]}) {
    return (
        <div className="tiles flex">
            {
                skills.map((skill, index) => {
                    return <Tile key={index} icon={skill}></Tile>
                })
            }
        </div>
    )
}