
function addRow(tableId) {
  const table = document.getElementById(tableId).getElementsByTagName("tbody")[0];
  const row = table.insertRow();
  const dateCell = row.insertCell(0);
  const typeCell = row.insertCell(1);
  const descCell = row.insertCell(2);
  const amountCell = row.insertCell(3);

  dateCell.innerHTML = '<input type="date">';
  if (tableId === 'cashflow-table') {
    typeCell.innerHTML = '<select><option value="+">Прихід</option><option value="-">Розхід</option></select>';
  } else {
    typeCell.innerHTML = '<select><option value="+">Дохід</option><option value="-">Витрата</option></select>';
  }
  descCell.innerHTML = '<input type="text" placeholder="Опис">';
  amountCell.innerHTML = '<input type="number" value="0" oninput="updateTotal(\'' + tableId + '\')">';
}

function updateTotal(tableId) {
  const table = document.getElementById(tableId).getElementsByTagName("tbody")[0];
  let total = 0;
  for (let row of table.rows) {
    const type = row.cells[1].getElementsByTagName("select")[0].value;
    const value = parseFloat(row.cells[3].getElementsByTagName("input")[0].value) || 0;
    total += type === "+" ? value : -value;
  }
  const totalElement = document.getElementById(tableId === "cashflow-table" ? "cashflow-total" : "income-total");
  totalElement.textContent = total.toFixed(2);
}
