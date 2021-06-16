import { request } from '@utils/request';
import routes from '@config/apiRoutes';
import { Category } from '@globalTypes/categoriesService';

export const getCategories = () =>
  request<Category[]>(routes.categories.all).then(({ data }) => data);
