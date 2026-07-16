import FiltroCard from '../../components/FitroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard ativo contador={1} legenda="pendentes" />
        <FiltroCard contador={2} legenda="concluídas" />
        <FiltroCard contador={3} legenda="urgentes" />
        <FiltroCard contador={4} legenda="importantes" />
        <FiltroCard contador={5} legenda="normal" />
        <FiltroCard contador={10} legenda="todas" />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
