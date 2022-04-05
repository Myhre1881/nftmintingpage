async function main() {
  const NftDogs = await ethers.getContractFactory("NftCyberDogsTest");

  // Start deployment, returning a promise that resolves to a contract object
  const nft_dogs = await NftDogs.deploy("TestCyberDogs","TCD","ipfs://QmezHk5cVLfpZS6Juvmbyx7Sm819e5tamVGJS7cDvVcbR3/","ipfs://QmezHk5cVLfpZS6Juvmbyx7Sm819e5tamVGJS7cDvVcbR3/");
  console.log("Contract deployed to address:", nft_dogs.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });