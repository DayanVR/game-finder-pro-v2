export default function InfoCall() {
  const infoList = [
    { text: 'Games', data: '850,000+' },
    { text: 'Genres', data: '19' },
    { text: 'Platforms', data: '6' },
    { text: 'Updated', data: 'Daily' },
  ];
  return (
    <div className="mx-auto mt-8 flex max-w-11/12 items-center justify-evenly gap-6 text-center">
      {infoList.map((info) => (
        <div
          key={info.text}
          className="flex flex-1 flex-col items-center rounded-xl border border-white/10 bg-(--color-bg-secondary)/60 p-3 shadow-lg shadow-[#8b5cf6]/20"
        >
          <span className="text-3xl font-bold text-white">{info.data}</span>
          <span className="text-lg text-white/70">{info.text}</span>
        </div>
      ))}
    </div>
  );
}
