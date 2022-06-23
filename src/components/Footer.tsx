import { RocketseatLogo } from "./RocketseatLogo";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-600 py-6 flex items-center gap-6">
      <RocketseatLogo />
      <div className="flex flex-1 justify-between text-gray-300 text-base">
        <div>
          Rocketseat - Todos os direitos reservados
        </div>
        <div>
          Políticas de privacidade
        </div>
      </div>
    </footer>
  )
}