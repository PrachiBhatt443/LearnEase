import React from 'react'
import FileU from './FileU'
import Foot from '../../footer/Foot'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from '@chakra-ui/react'
import styles from './Upload.module.css'

const Uploadpersonal = () => {
  return (
    <>
      <Box className={styles.boxContainer}>
        <Tabs variant="soft-rounded" colorScheme="teal">
          <TabList className={styles.tabContainer}>
            <Tab className={styles.customTab} _selected={{ className: styles.customTabSelected }}>
              Previous Year Questions
            </Tab>
            <Tab className={styles.customTab} _selected={{ className: styles.customTabSelected }}>
              Notes
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel className={styles.tabPanel}>
              <FileU uploadUrl="/api/upload/pyq" label="Upload Previous Year Questions" />
            </TabPanel>
            <TabPanel className={styles.tabPanel}>
              <FileU uploadUrl="/api/upload/notes" label="Upload Notes" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Foot />
    </>
  )
}

export default Uploadpersonal
