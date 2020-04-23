import React from 'react';

import Filter from './Filter';
import Refunds from './Refund';
import Transactions from './Transactions';
import OverallHealth from './OverallHealth';
import LostTransactions from './LostTransactions';

export default props => {

    return(
        <div className="dashboard">

            <Filter />
            <Transactions />
            <Refunds />
            <LostTransactions />
            <OverallHealth /> 

        </div>
    )
}