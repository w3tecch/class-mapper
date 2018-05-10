export class TargetAddressModel {
  @MapFromSource(source => source.addressLine1, { groups: ['customer'] })
  public street!: string;

  @MapFromSource(source => source.addressLine2, { groups: ['customer'] })
  public houseNumber!: string;

  @MapFromSource(source => source.addressLine3, { groups: ['customer'] })
  public zip!: number;

  @MapFromSource(source => source.addressLine4, { groups: ['customer'] })
  public city!: string;
}
