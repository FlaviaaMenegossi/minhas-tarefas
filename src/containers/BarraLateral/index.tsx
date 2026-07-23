import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FitroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Status.PENDENTE}
            criterio="status"
            ativo
            contador={1}
            legenda="pendentes"
          />
          <FiltroCard
            valor={enums.Status.CONCLUIDA}
            criterio="status"
            contador={2}
            legenda="concluídas"
          />
          <FiltroCard
            valor={enums.Prioridade.URGENTE}
            criterio="prioridade"
            contador={3}
            legenda="urgentes"
          />
          <FiltroCard
            valor={enums.Prioridade.IMPORTANTE}
            criterio="prioridade"
            contador={4}
            legenda="importantes"
          />
          <FiltroCard
            valor={enums.Prioridade.NORMAL}
            criterio="prioridade"
            contador={5}
            legenda="normal"
          />
          <FiltroCard criterio="todas" contador={10} legenda="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
