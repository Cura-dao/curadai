const CuraDai = artifacts.require("CuraDai");

module.exports = function(deployer) {
  // NEED to replace below addresses with actual values
  deployer.deploy(CuraDai, "CuraDai", "CURA", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000");
};
