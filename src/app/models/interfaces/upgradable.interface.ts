export interface Upgradable {
  /**
   * @description upgrade a job's level by 1 after checking if the player has enough money
   * @param {number} id
   * @param {number} playerCoins
   */
  upgrade(id: number, playerCoins: number): void;

  /**
   * @description get the item cost by id
   * @param id
   * @returns {number | undefined} the item cost
   */
  getUpgradeCostById(id: number): number | undefined;
}
