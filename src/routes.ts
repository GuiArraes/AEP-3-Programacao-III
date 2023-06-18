import {Router} from 'express'
import pokemonController from './pokemon/pokemon.controller'
import timeController from './time/time.controller'

const router = Router()

router.get('/salvar-pokemon', pokemonController.salvarPokemon)
//router.get('/ler-pokemon', pokemonController.lerPokemon)
router.get('/salvar-banco', pokemonController.salvarBanco)
/************************TIME************************************/
router.post('/time-salvar', timeController.salvarTime) //falta terminar
router.get('/time-pokemon', timeController.pegarTime)
router.get('/filtrar-treinador', timeController.buscarPorTreinador) // UTILIZEI Query Parametre : A chave é "treinador"
router.put('/filtrar-treinador', timeController.alterarPorTreinador) 
router.delete('/filtrar-treinador', timeController.deletarPorTreinador) // UTILIZEI Query Parametre : A chave é "treinador"
router.get('/filtrar-pokemon-tipo', timeController.buscarPorTipo) // UTILIZEI Query Parametre : A chave é "tipo"
router.get('/filtrar-pokemon-dex', timeController.buscarPorDex) // UTILIZEI Query Parametre : A chave é "dex"
router.get('/filtrar-pokemon-name', timeController.buscarPorName) // UTILIZEI Query Parametre : A chave é "namePokemon"

export default router