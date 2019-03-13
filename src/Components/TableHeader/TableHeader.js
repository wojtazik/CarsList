import React from 'react';
import "./TableHeader.scss";

export default function TableHeader() {
  return (
    <thead className="table-header">
        <tr>
        <th className="table-header__item">Nazwa</th>
        <th className="table-header__item">Model</th>
        <th className="table-header__item">Silnik</th>
        <th className="table-header__item">Dostępność</th>
        <th className="table-header__item">Akcje</th>
        </tr>
    </thead>
  )
}
