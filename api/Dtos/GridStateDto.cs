using System.Collections.Generic;

namespace PersistingGridLayoutApp.Dtos
{
    public class GridStateDto
    {
        public List<GridColumnDto> Columns { get; set; } = new List<GridColumnDto>();
        public int[] AllowedPageSizes { get; set; }
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
    }

    public class GridColumnDto
    {
        public int? VisibleIndex { get; set; }
        public string DataField { get; set; }
        public string DataType { get; set; }
        public string Width { get; set; }
        public bool? Visible { get; set; }
        public string SortOrder { get; set; }
        public int GroupIndex { get; set; }
        public string FilterValue { get; set; }
    }
}
