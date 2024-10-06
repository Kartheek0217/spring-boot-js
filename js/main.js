document.addEventListener('DOMContentLoaded', () => {
  const contentElement = document.getElementById('content');
  const links = document.querySelectorAll('.sidebar ul li a');

  function loadPage() {
    const hash = window.location.hash || '#/home';
    let page = hash.substring(2); // Extract page name from hash

    // Fetch page content
    fetch(`/pages/${page}.html`)
      .then((response) =>
        response.ok ? response.text() : Promise.reject(response)
      )
      .then((html) => (contentElement.innerHTML = html))
      .catch(() => (contentElement.innerHTML = '<p>Error loading page.</p>'));

    // Highlight active link
    links.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === hash);
    });
  }

  window.addEventListener('hashchange', loadPage);
  loadPage(); // Load initial page

  // Base URL and API endpoints
  const baseUrl = window.location.pathname.replace(/\/$/, '');
  const migrateSchemaAPI = `${baseUrl}/mssql-mysql/migrate_schema`;
  const migrateAllTablesAPI = `${baseUrl}/mssql-mysql/migrate_all_tables`;
  const downloadMigrationStatusAPI = `${baseUrl}/mssql-mysql/download_migration_status`;
  const downloadMySqlSchemaAPI = `${baseUrl}/mssql-mysql/download_mysql_schema`;
  const migrateByTableNameAPI = `${baseUrl}/mssql-mysql/migrate_by_tablename`;
  const updatedbConfigAPI = `${baseUrl}/db-config/update`;
  const logoutAPI = `${baseUrl}/logout`;

  const instanceContainer = document.getElementById('instanceContainer');
  const updateButton = document.getElementById('updateConfig');

  // UI elements for showing and hiding loaders and responses
  const elements = {
    migrateSchema: document.getElementById('migrateSchema'),
    migrateAllData: document.getElementById('migrateAllData'),
    downloadStatus: document.getElementById('downloadStatus'),
    downloadSchema: document.getElementById('downloadSchema'),
    tableNameInput: document.getElementById('tableNameInput'),
    submitTableName: document.getElementById('submitTableName'),
    loader: document.getElementById('loader'),
    response: document.getElementById('response'),
    logoutButton: document.getElementById('logoutButton'),
  };

  const ui = {
    showLoader: () => {
      console.log('Showing loader');
      elements.loader.style.display = 'flex';
    },
    hideLoader: () => {
      console.log('Hiding loader');
      elements.loader.style.display = 'none';
    },
    showResponse: (message) => {
      elements.response.textContent = message;
    },
    clearResponse: () => {
      elements.response.textContent = '';
    },
  };

  const api = {
    async performOperation(url, method = 'GET', data = {}, customHeaders = {}) {
      ui.showLoader();
      ui.clearResponse();
      try {
        const response = await axios({
          method: method,
          url: url,
          data: data,
        });
        ui.showResponse(response.data);
      } catch (error) {
        console.error('Error:', error);
        ui.showResponse('An error occurred: ' + error.message);
      } finally {
        ui.hideLoader();
      }
    },
    async downloadOperation(url) {
      ui.showLoader();
      ui.clearResponse();
      try {
        const response = await axios.get(url, { responseType: 'blob' });
        const contentDisposition = response.headers['content-disposition'];
        let filenameMatch =
          contentDisposition &&
          contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/i);
        let filename = filenameMatch ? filenameMatch[1] : 'download';
        filename = filename.trim().replace(/_$/, '');

        const blob = new Blob([response.data], {
          type: response.headers['content-type'],
        });
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = downloadUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(downloadUrl);
        ui.showResponse('Download completed successfully.');
      } catch (error) {
        console.error('Error:', error);
        ui.showResponse('An error occurred: ' + error.message);
      } finally {
        ui.hideLoader();
      }
    },
  };

  const attachEventListeners = () => {
    elements.migrateSchema.addEventListener('click', () =>
      api.performOperation(migrateSchemaAPI)
    );
    elements.migrateAllData.addEventListener('click', () =>
      api.performOperation(migrateAllTablesAPI)
    );
    elements.downloadStatus.addEventListener('click', () =>
      api.downloadOperation(downloadMigrationStatusAPI)
    );
    elements.downloadSchema.addEventListener('click', () =>
      api.downloadOperation(downloadMySqlSchemaAPI)
    );

    elements.submitTableName.addEventListener('click', async () => {
      const tableName = elements.tableNameInput.value.trim();
      if (tableName) {
        const options = {
          method: 'GET',
          headers: { tableName: tableName },
        };
        await api.performOperation(
          migrateByTableNameAPI,
          'GET',
          {},
          options.headers
        );
        elements.tableNameInput.value = '';
      } else {
        ui.showResponse('Please enter a table name.');
      }
    });

    elements.tableNameInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        elements.submitTableName.click();
      }
    });

    // Hide instance dropdown if MSSQL is selected
    dbTypeSelect.addEventListener('change', function () {
      if (dbTypeSelect.value === 'mssql') {
        instanceContainer.style.display = 'none';
      } else {
        instanceContainer.style.display = 'block';
      }
    });

    const dbType = dbTypeSelect.value;
    const instanceType =
      dbType === 'mysql' ? document.getElementById('instanceSelect').value : '';
    const dbTypeSelect = document.getElementById('dbTypeSelect');
    const jdbc = document.getElementById('jdbcInput').value;
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;
    // Handle Update button click
    updateButton.addEventListener('click', function () {
      const data = {
        dbType: dbType,
        instanceType: instanceType,
        jdbc: jdbc,
        userName: username,
        password: password,
      };
      api.performOperation(updatedbConfigAPI, 'POST', data); // Changed method to POST
    });

    // Logout button
    elements.logoutButton.addEventListener('click', () => {
      api.performOperation(logoutAPI, 'POST');
    });
  };
  attachEventListeners();
});
