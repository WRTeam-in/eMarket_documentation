---
sidebar_position: 2
---

# PHP INI Settings

## Required PHP Configuration

To run eMarket properly, please check and set the following PHP settings in your php.ini file:

```ini
memory_limit = 512M
upload_max_filesize = 128M
post_max_size = 128M
max_execution_time = 300
max_input_time = 300
```

These settings will ensure that your eMarket installation can handle large file uploads, process data efficiently, and operate properly with sufficient memory allocation.

For managing dependencies, Laravel uses composer. Make sure you have a Composer installed on your system before you install Laravel.

1. max_execution_time : 3000
2. memory_limit : 500M
3. post_max_size : 200M
4. upload_max_filesize: 200M
