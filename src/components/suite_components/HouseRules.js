import React from "react";
import "../../assets/css/Suite.css";
import { Link } from "react-router-dom";
import houseRules from "../../assets/images/suites/house_rules.png";
import houseRulesEdit from "../../assets/images/suites/house_rules_edit.png";
import houseRulesDelete from "../../assets/images/suites/house_rules_delete.png";
import houseRulesMod from "../../assets/images/suites/house_rules_modified.png";
import deleteButton from "../../assets/images/suites/delete-button.png";

const HouseRules = (props) => {
  const {
    onEdit,
    onDismissEdit,
    onDelete,
    onCreate,
    showEditButton,
    deleted,
    newRuleFilled,
    newRule,
  } = props;

  return (
    <div>
      {showEditButton && !newRuleFilled && (
        <div>
          <button
            className="edit-rules"
            aria-label="edit house rules"
            onClick={onEdit}
          >
            Edit
          </button>

          <img alt="house rules" src={houseRules} />
        </div>
      )}

      {!showEditButton && !deleted && !newRuleFilled && (
        <div>
          <button className="create-rules" aria-label="create house rules">
            Create
          </button>
          <button
            className="dismiss-edit"
            aria-label="edit house rules"
            onClick={onDismissEdit}
          >
            Done
          </button>
          <button
            className="delete-rule"
            aria-label="delete house rules"
            onClick={onDelete}
          >
            x
          </button>

          <img alt="edit house rules" src={houseRulesEdit} />
        </div>
      )}

      {!showEditButton && deleted && !newRuleFilled && (
        <div>
          <button
            className="create-rules"
            aria-label="create house rules"
            onClick={onCreate}
          >
            Create
          </button>
          <button
            className="dismiss-edit"
            aria-label="edit house rules"
            onClick={onDismissEdit}
          >
            Done
          </button>

          <img alt="edit house rules" src={houseRulesDelete} />
        </div>
      )}

      {!showEditButton && newRuleFilled && (
        <div>
          <button
            className="create-rules"
            aria-label="create house rules"
            onClick={onCreate}
          >
            Create
          </button>
          <button
            className="dismiss-edit"
            aria-label="edit house rules"
            onClick={onDismissEdit}
          >
            Done
          </button>

          {!deleted && <div className="rule">{newRule}</div>}
          {!deleted && (
            <button
              className="delete-button"
              aria-label="delete the new house rules"
              onClick={onDelete}
            >
              <img src={deleteButton} alt="delete button" />
            </button>
          )}
          <img alt="edit house rules" src={houseRulesDelete} />
        </div>
      )}

      {showEditButton && newRuleFilled && (
        <div>
          <button
            className="edit-rules"
            aria-label="edit house rules"
            onClick={onEdit}
          >
            Edit
          </button>

          {!deleted && <div className="rule-mod">{newRule}</div>}

          <img alt="modified house rules" src={houseRulesMod} />
        </div>
      )}
    </div>
  );
};

export default HouseRules;
