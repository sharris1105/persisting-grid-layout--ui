namespace PersistingGridLayoutApp.Dtos
{
  public class LayoutStateDto
  {
      public string UserProfilePk { get; set; }
      public string StorageKey { get; set; }
      public GridStateDto StateData { get; set; }
  }
}
