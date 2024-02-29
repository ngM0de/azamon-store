import { FilterSettings, FilterOptions } from '../../models/utility.model';

export interface GlobalState {
  filterSettings: FilterSettings;
  paginationLimit: number;
  filterOptions: FilterOptions
}
