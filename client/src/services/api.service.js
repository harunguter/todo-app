import Request from '../utils/request.util';
import ENV from '../constants/ENV';

const request = new Request(ENV.API_BASE_URL);

const getTodo = async (id = '') => await request.get(`/${id}`);

const addTodo = async (content) => await request.post('/', { content });

const updateTodo = async (id, data) => await request.put(`/${id}`, data);

const deleteTodo = async (id) => await request.delete(`/${id}`);

export default {
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
};
