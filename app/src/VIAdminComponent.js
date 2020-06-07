import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import viLogo from "./vi-logo.png";
import styled from "styled-components";
import BlockieAccountData from "./blockieDrizzle/BlockieAccountData";

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">
      <div>
        <img src={viLogo} alt="value-instrument-logo" />
        <h1>VI Currency Admin</h1>
        <p>
          Admin interface for adjusting parameters of a Value Instrument
          currency.
        </p>
      </div>
      <h2>Active account</h2>
      <AccountData
        drizzle={drizzle}
        drizzleState={drizzleState}
        accountIndex={0}
        units="ether"
        precision={3}
      />
      <div className="section">
        <p>
          <strong>Decayed balance: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="getDecayedBalance"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
        <p>
          <strong>Balance of: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="balanceOf"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
        <p>
          <strong>Live balance of: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="liveBalanceOf"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
        <strong>Trigger onchain balance update: </strong>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="VICoin"
          method="triggerOnchainBalanceUpdate"
          methodArgs={[drizzleState.accounts[0]]}
        />
      </div>
      <div className="section">
        <h2>Simulate passing of time</h2>
        <p>Mine blocks to simulate the passing of time.</p>
        <p>
          <strong>Block: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="getBlockNumber"
          />
        </p>
        <ContractForm drizzle={drizzle} contract="VICoin" method="mine" />
      </div>

      <div className="section">
        <h2>Economic parameters</h2>
        <p>Adjust the economic parameters of your currency.</p>
        <p>
          <strong>Generation Period: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="generationPeriod"
          />
        </p>
        <ContractForm
          drizzle={drizzle}
          contract="VICoin"
          method="updateGenerationPeriod"
        />
        <p>
          <strong>Generation amount: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="generationAmount"
          />
        </p>
        <ContractForm
          drizzle={drizzle}
          contract="VICoin"
          method="updateGenerationAmount"
        />
        <p>
          <strong>Lifetime: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="lifetime"
          />
        </p>
        <ContractForm
          drizzle={drizzle}
          contract="VICoin"
          method="updateLifetime"
        />
        <p>
          <strong>Initial balance: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="initialBalance"
          />
        </p>
        <ContractForm
          drizzle={drizzle}
          contract="VICoin"
          method="updateInitialBalance"
        />
      </div>

      <div className="section">
        <h2>Contribution and fees</h2>
        <p>Adjust fees and contribution rate of your currency.</p>
        <p>
          <strong>Contribution rate: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="communityContribution"
          />
        </p>
        <ContractForm
          drizzle={drizzle}
          contract="VICoin"
          method="updateCommunityContribution"
        />
        <p>
          <strong>Contribution account: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="communityContributionAccount"
          />
        </p>
        <ContractForm
          drizzle={drizzle}
          contract="VICoin"
          method="updateCommunityContributionAccount"
        />
        <p>
          <strong>Transaction fees: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="transactionFee"
            precision={2}
          />
        </p>
        <ContractForm
          drizzle={drizzle}
          contract="VICoin"
          method="updateTransactionFee"
        />
        <p>
          <strong>Decimal places in contribution fee: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="contributionFeeDecimals"
          />
        </p>
      </div>
      <div className="section">
        <h2>Your account in detail:</h2>
        <p>Details of your account.</p>
        <p>
          <strong>Zero block: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="zeroBlock"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
        <p>
          <strong>Last generation block: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="lastGenerationBlock"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
        <p>
          <strong>Last incoming transaction block: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="lastTransactionBlock"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
        <p>
          <strong>Account verified: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="accountApproved"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
      </div>

      <div className="section">
        <h2>Verify an account:</h2>
        <p>Verify a new account.</p>
        <strong>Account to verify: </strong>
        <ContractForm
          drizzle={drizzle}
          contract="VICoin"
          method="verifyAccount"
          sendArgs={{ gas: 600000, gasPrice: 40000000000 }}
        />
        <p>
          <strong>Last generation block: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="lastGenerationBlock"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
        <p>
          <strong>Last incoming transaction block: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="lastTransactionBlock"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
        <p>
          <strong>Account verified: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="accountApproved"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
      </div>

      <div className="section">
        <h2>Transfer:</h2>
        <p>Transfer value.</p>
        <strong>Transfer: </strong>
        <ContractForm
          drizzle={drizzle}
          contract="VICoin"
          method="transfer"
          labels={["Recipient", "Amount in VALUE"]}
          // sendArgs={{gas: 600000, gasPrice: 40000000000}}
        />
        <p>
          <strong>Last generation block: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="VICoin"
            method="lastGenerationBlock"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
      </div>
    </div>
  );
};
