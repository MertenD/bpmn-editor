import React, {useEffect, useState} from "react"
import {PointsType} from "../../model/PointsType";

export type PointsGamificationOptionsData = {
    pointType?: PointsType,
    pointsForSuccess?: number
}

interface PointsGamificationOptionsProps {
    gamificationOptions: PointsGamificationOptionsData
    onChange: (gamificationOptions: PointsGamificationOptionsData) => void
}

export default function PointsGamificationOptions(props: PointsGamificationOptionsProps) {

    const [pointType, setPointType] = useState(props.gamificationOptions.pointType || PointsType.EXPERIENCE)
    const [pointsForSuccess, setPointsForSuccess] = useState(props.gamificationOptions.pointsForSuccess || 0)

    useEffect(() => {
        props.onChange({
            pointType: pointType,
            pointsForSuccess: pointsForSuccess
        })
    }, [pointType, pointsForSuccess, props])

    return (
        <>
            <span style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10
            }}>
                { "Point Type: " }
                <select
                    defaultValue={pointType}
                    name="pointType"
                    id="pointType"
                    className="nodrag"
                    onChange={(event) => {
                        // @ts-ignore
                        setPointType(event.target.value)
                    }}
                >
                    {
                        Object.values(PointsType).map(type => {
                            return <option key={type.valueOf()} value={type}>{ type.valueOf() }</option>
                        })
                    }
                </select>
            </span>
            <span style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10
            }}>
                { "Points for success: " }
                <input
                    type="number"
                    placeholder="Points"
                    defaultValue={pointsForSuccess}
                    className="nodrag"
                    onChange={(event) => {
                        setPointsForSuccess(Number(event.target.value))
                    }}
                />
            </span>
        </>
    )
}