import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import I18n from "redux-i18n";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "redux/configureStore";
import Root from "containers/Root";
import { translations } from "translations";

ReactDOM.render(
  <Provider store={store}>
    <I18n translations={translations} initialLang="en" fallbackLang="en">
      <ConnectedRouter history={history}>
        <Root />
      </ConnectedRouter>
    </I18n>
  </Provider>,
  document.getElementById("root")
);
