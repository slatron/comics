export const useInitLifetracker = ({playerCount, startingLife, multiplayerMode}) => {
  return Array.from(new Array(playerCount), (x,i) => {
    console.log(`Generating Section ${x}`)
    return {
      id: i + 1,
      startingLife,
      flip: multiplayerMode && (i < (playerCount / 2)),
      name: `Player ${i + 1}`
    }    
  })
}

