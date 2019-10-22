using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using PersistingGridLayoutApp.Dtos;

namespace PersistingGridLayoutApp.Controllers
{
    [Route("[controller]")]
    public class LayoutStateController : ControllerBase
    {
        private LayoutStateDto _layoutStateDto;
        private readonly List<GridColumnDto> _layoutArray;
        public LayoutStateController()
        {
            _layoutArray = new List<GridColumnDto>();
        }

        [HttpGet("[action]")]
        public IActionResult LayoutState(string userProfilePk, string itemStorageKey)
        {
            return Ok(_layoutStateDto);
        }

        [HttpPatch("[action]")]
        public IActionResult LayoutState(string userProfilePk, string itemStorageKey, [FromBody] GridStateDto stateData)
        {
            if (_layoutStateDto == null)
            {
                _layoutStateDto = new LayoutStateDto();
            }
            _layoutStateDto.UserProfilePk = userProfilePk;
            _layoutStateDto.StorageKey = itemStorageKey;
            _layoutStateDto.StateData = stateData;

            return Ok(_layoutStateDto);
        }
    }
}
