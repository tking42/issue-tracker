'use client'
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const DeleteIssueButton = ({ issueId }: {issueId: number}) => {

   const router = useRouter()
  return (
    <div>
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button color='red' className='hover:cursor-pointer'>Delete Issue</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
                <AlertDialog.Title>
                    Confirm Deletion
                </AlertDialog.Title>
                <AlertDialog.Description>
                    Are you sure you want to delete this issue? This action cannot be undone.
                </AlertDialog.Description>
                <Flex mt='4' gap='3'>
                    <AlertDialog.Cancel>
                        <Button variant='soft' color='gray' className='hover:cursor-pointer' >Cancel</Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                        <Button color='red' className='hover:cursor-pointer' onClick={async () => {
                            await axios.delete('/api/issues/' + issueId)
                            router.push('/issues')
                            router.refresh()
                }}>Delete Issue</Button>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    </div>
  )
}

export default DeleteIssueButton
