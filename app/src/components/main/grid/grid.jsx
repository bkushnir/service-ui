import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { GridHeader } from './gridHeader';
import { GridBody } from './gridBody';
import { columnPropTypes } from './propTypes';
import styles from './grid.scss';

const cx = classNames.bind(styles);

const isAllItemsSelected = (items, selectedItems) =>
  items.every(item => selectedItems.some(selectedItem => selectedItem.id === item.id));

export const Grid = ({
  columns,
  data,
  sortingColumn,
  sortingDirection,
  onChangeSorting,
  onFilterClick,
  selectable,
  selectedItems,
  onToggleSelectAll,
  onToggleSelection,
}) => (
  <div className={cx('grid')}>
    <GridHeader
      columns={columns}
      sortingColumn={sortingColumn}
      sortingDirection={sortingDirection}
      onChangeSorting={onChangeSorting}
      onFilterClick={onFilterClick}
      selectable={selectable}
      allSelected={isAllItemsSelected(data, selectedItems)}
      onToggleSelectAll={onToggleSelectAll}
    />
    <GridBody
      columns={columns}
      data={data}
      selectable={selectable}
      selectedItems={selectedItems}
      onToggleSelection={onToggleSelection}
    />
  </div>
);
Grid.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape(columnPropTypes)),
  data: PropTypes.arrayOf(PropTypes.object),
  sortingDirection: PropTypes.string,
  sortingColumn: PropTypes.string,
  onChangeSorting: PropTypes.func,
  onFilterClick: PropTypes.func,
  selectable: PropTypes.bool,
  selectedItems: PropTypes.arrayOf(PropTypes.object),
  onToggleSelection: PropTypes.func,
  onToggleSelectAll: PropTypes.func,
};
Grid.defaultProps = {
  columns: [],
  data: [],
  sortingDirection: 'DESC',
  sortingColumn: null,
  onChangeSorting: () => {
  },
  onFilterClick: () => {
  },
  selectable: false,
  selectedItems: [],
  onToggleSelectAll: () => {
  },
  onToggleSelection: () => {
  },
};
