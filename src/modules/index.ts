import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import product from './product';
import thunk from 'redux-thunk';



const rootReducer = combineReducers({
  product,
});


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

export type RootState = ReturnType<typeof store.getState>;

export default store;
