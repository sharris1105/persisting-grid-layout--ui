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
}
