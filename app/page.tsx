import { prisma } from "@/prisma/client";
import IssueSummary from "./components/IssueSummary";
import LatestIssues from "./components/LatestIssues";
import IssueChart from "./components/IssueChart";
import { Flex, Grid } from "@radix-ui/themes";

export default async function Home() {

  const openIssues = await prisma.issue.count({ where: { status: 'OPEN' } })
  const closedIssues = await prisma.issue.count({ where: { status: 'CLOSED' } })
  const inProgressIssues = await prisma.issue.count({ where: { status: 'IN_PROGRESS' } })
  return (
    <Grid columns={{ initial: '1', md: '2' }} gap='5'>
      <Flex direction='column' gap='5'>
        <IssueSummary openIssues={openIssues} inProgressIssues={inProgressIssues} closedIssues={closedIssues} />
        <IssueChart openIssues={openIssues} inProgressIssues={inProgressIssues} closedIssues={closedIssues} />
      </Flex>
      <LatestIssues />
    </Grid>



  );
}
