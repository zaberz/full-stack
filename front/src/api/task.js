import request from '@/libs/request';

export function getTasks() {
  return request.get('/tasks');
}

export function finishTask(id) {
  return request.delete(`/tasks/${id}`);
}

export function addTask(content) {
  return request.post(`/tasks`, {content});
}
