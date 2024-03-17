export function Line() {
  return (
    <div data-orientation="horizontal" role="none" className="shrink-0 bg-zinc-900 h-[1px] w-full relative">
      <div aria-hidden="true" className="left-1/2 top-0 w-[300px] max-w-[300px] user-select-none center pointer-events-none absolute h-px -translate-x-1/2 -translate-y-1/2" 
      style={{background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)'}}></div>
    </div>
  )
}