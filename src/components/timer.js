import * as React from 'react';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function Timer({ deadline = new Date().toString() }) {
  const parsedDeadline = React.useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = React.useState(parsedDeadline - Date.now());

  React.useEffect(() => {
    const interval = setInterval(() => setTime(parsedDeadline - Date.now()), 1000);

    return () => clearInterval(interval);
  }, [parsedDeadline]);

  return (
    <div className='flex justify-between text-2xl gap-4'>
      {Object.entries({
        D: time / DAY,
        H: (time / HOUR) % 24,
        M: (time / MINUTE) % 60,
        S: (time / SECOND) % 60,
      }).map(([label, value], i, a) => (
        <>
          {' '}
          <div key={label} className=''>
            <div className='flex items-center flex-col'>
              <p>{`${Math.floor(value)}`.padStart(2, '0')}</p>
              <span className=''>{label}</span>
            </div>
          </div>
          {i !== a.length - 1 && <div className='leading-tight'>:</div>}
        </>
      ))}
    </div>
  );
}
