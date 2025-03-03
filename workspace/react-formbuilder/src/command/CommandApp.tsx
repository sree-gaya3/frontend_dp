import React, { CSSProperties, useRef, useState } from 'react'

import { BoldCommand, Command, CommandUtils, ItalicCommand } from './Command';

function useHistoryManager<T>() {
  const [backHistory, setBackHistory] = useState<Command<T>[]>([]);
  const topBackIndexRef = useRef(-1);

  const executeCommand = async (command: Command<T>) => {
    await command.execute();
    setBackHistory((prev) => [...prev, command]);
    topBackIndexRef.current++;
  };

  const undo = async () => {
    if (!backHistory.length || topBackIndexRef.current === -1) return;
    const topUndoCommand = backHistory[topBackIndexRef.current];
    await topUndoCommand.undo();
    setBackHistory((prev) => prev.slice(0, -1));
    topBackIndexRef.current--;
  }

  return {
    executeCommand, undo
  }
}

export default function CommandApp() {
  const [styles, setStyles] = useState<CSSProperties>({});
  const utils = { styles, setStyles };
  const { executeCommand, undo } = useHistoryManager<CommandUtils>();

  const setTextToItalic = async () => {
    const italicCommand = new ItalicCommand(utils);
    await executeCommand(italicCommand);
  }

  const setTextToBold = async () => {
    const boldCommand = new BoldCommand(utils);
    await executeCommand(boldCommand);
  }
  return (
    <div>
      <div>
        <p style={styles}>
          Hello from React!!
        </p>
        <div>
          <button onClick={setTextToItalic}>I</button>
          <button onClick={setTextToBold}>B</button>
          <button onClick={undo}>Undo</button>
        </div>
      </div>
    </div>
  )
}