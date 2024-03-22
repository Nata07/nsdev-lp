export function Footer() {
  return (
    <footer className="py-10 text-sm border-t border-zinc-500">
      <div className="container max-w-screen-xl flex flex-col md:flex-row text-center md:text-left justify-between opacity-60">
        <p className="mb-2 md:mb-0">© {new Date().getFullYear()} NSDEV Creative. Todos os direitos reservados.</p>
        <p className="mb-8 md:mb-0">CNPJ: 52.834.193/0001-80</p>
      </div>
    </footer>
  )
}