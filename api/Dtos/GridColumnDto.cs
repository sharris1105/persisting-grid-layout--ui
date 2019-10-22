using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersistingGridLayoutApp.Dtos
{
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
