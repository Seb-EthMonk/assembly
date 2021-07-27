import { computed } from '@nuxtjs/composition-api'
import { useWeb3 } from './useWeb3'

export function useLink() {
  const { networkName } = useWeb3()

  const addressDetailsLink = computed(() => {
    if (networkName.value === 'polygon') {
      return 'https://polygonscan.com/address'
    }

    return 'https://etherscan.io/address'
  })

  return { addressDetailsLink }
}

export const getEtherscanLink = (transactionHash) => `https://etherscan.io/tx/${transactionHash}`
export const getMaticLink = (transactionHash) => `https://polygonscan.com/tx/${transactionHash}`
export const getTenderlyLink = (simulationId) =>
  `https://dashboard.tenderly.co/public/InstaDApp/dsa-simulations/fork-simulation/${simulationId}?hideSidebar=true`