import { useEffect, useState } from "react";

function useCopy(time = 3000) {
  const [copiedIds, setCopy] = useState({});

  useEffect(() => {
    let intervalId;

    if (Object.keys(copiedIds).length) {
      intervalId = setTimeout(() => {
        setCopy((prev) =>
          Object.values(prev).reduce((acc, cur) => {
            if (cur.time < time) {
              return {
                ...acc,
                [cur.index]: {
                  index: cur.index,
                  time: cur.time + 100,
                },
              };
            } else {
              return acc;
            }
          }, {})
        );
      }, [100]);
    }

    return () => clearInterval(intervalId);
  }, [copiedIds]);

  const handleCopy = async (index, content) => {
    await navigator.clipboard.writeText(content);
    setCopy((prev) => ({
      ...prev,
      [index]: {
        index,
        time: 0,
      },
    }));
  };

  return [copiedIds, handleCopy];
}

export default useCopy;
