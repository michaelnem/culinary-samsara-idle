export interface Earnable {
  /**
   * @description loop through the jobs array and return the accumulated value
   * @returns {number}
   */
  getEarnings(): number;
}
