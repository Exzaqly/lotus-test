const turnDuration = 120000; // 2 min

export const getTimerState = (startedAt, participantsCount) => {
  const roundProgress = (Date.now() - startedAt) % (turnDuration * participantsCount);

  let index = Math.trunc(roundProgress / turnDuration);
  if (index === participantsCount) {
    index--;
  }

  return {
    currentParticipantIndex: index,
    timerValue: roundProgress - index * turnDuration,
  };
}