import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
//import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
export interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
}
const USER_DATA: UserData[] = [
  { id: '1', name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'User',
  },
  {
    id: '3',
    name: 'Sam Wilson',
    email: 'sam.wilson@example.com',
    role: 'User',
  },
  {
    id: '4',
    name: 'Lisa Brown',
    email: 'lisa.brown@example.com',
    role: 'Admin',
  },
  {
    id: '5',
    name: 'Mark Johnson',
    email: 'mark.johnson@example.com',
    role: 'User',
  },
  {
    id: '6',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    role: 'User',
  },
  {
    id: '7',
    name: 'Michael Lee',
    email: 'michael.lee@example.com',
    role: 'Admin',
  },
  {
    id: '8',
    name: 'Sarah Taylor',
    email: 'sarah.taylor@example.com',
    role: 'User',
  },
  {
    id: '9',
    name: 'David Harris',
    email: 'david.harris@example.com',
    role: 'User',
  },
  {
    id: '10',
    name: 'Jessica Martinez',
    email: 'jessica.martinez@example.com',
    role: 'Admin',
  },
  {
    id: '11',
    name: 'James Clark',
    email: 'james.clark@example.com',
    role: 'User',
  },
  {
    id: '12',
    name: 'Laura Lewis',
    email: 'laura.lewis@example.com',
    role: 'User',
  },
  {
    id: '13',
    name: 'Robert Walker',
    email: 'robert.walker@example.com',
    role: 'Admin',
  },
  {
    id: '14',
    name: 'Michelle Hall',
    email: 'michelle.hall@example.com',
    role: 'User',
  },
  {
    id: '15',
    name: 'William Allen',
    email: 'william.allen@example.com',
    role: 'User',
  },
  {
    id: '16',
    name: 'Elizabeth Young',
    email: 'elizabeth.young@example.com',
    role: 'Admin',
  },
  {
    id: '17',
    name: 'Christopher King',
    email: 'christopher.king@example.com',
    role: 'User',
  },
  {
    id: '18',
    name: 'Patricia Wright',
    email: 'patricia.wright@example.com',
    role: 'User',
  },
  {
    id: '19',
    name: 'Brian Scott',
    email: 'brian.scott@example.com',
    role: 'Admin',
  },
  {
    id: '20',
    name: 'Kimberly Green',
    email: 'kimberly.green@example.com',
    role: 'User',
  },
  {
    id: '21',
    name: 'Joshua Adams',
    email: 'joshua.adams@example.com',
    role: 'User',
  },
  {
    id: '22',
    name: 'Sophia Nelson',
    email: 'sophia.nelson@example.com',
    role: 'Admin',
  },
  {
    id: '23',
    name: 'Daniel Carter',
    email: 'daniel.carter@example.com',
    role: 'User',
  },
  {
    id: '24',
    name: 'Rebecca Mitchell',
    email: 'rebecca.mitchell@example.com',
    role: 'User',
  },
  {
    id: '25',
    name: 'Andrew Perez',
    email: 'andrew.perez@example.com',
    role: 'Admin',
  },
];

//
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'action'];

  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(USER_DATA);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('result', result);
        const newUser: UserData = {
          id: (this.dataSource.data.length + 1).toString(),
          name: result.name,
          email: result.email,
          role: result.role,
        };
        this.dataSource.data = [...this.dataSource.data, newUser];
        this.sortData(this.sortColumn, this.sortDirection);
      }
    });
  }

  openDialog(user: UserData): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '250px',
      data: user,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource.data = this.dataSource.data.filter(
          (u) => u.id !== user.id
        );
      }
    });
  }
  // Sorting variables and methods
  sortColumn: keyof UserData = 'id';  // Default sort column
  sortDirection: 'asc' | 'desc' = 'asc';  // Default sort direction

  onSortChange(column: keyof UserData) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.sortData(this.sortColumn, this.sortDirection);
  }

  sortData(column: keyof UserData, direction: 'asc' | 'desc') {
    const sortedData = this.dataSource.data.sort((a, b) => {
      const isAsc = direction === 'asc';
      switch (column) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'email':
          return compare(a.email, b.email, isAsc);
        case 'role':
          return compare(a.role, b.role, isAsc);
        default:
          return 0;
      }
    });
    this.dataSource.data = sortedData;
  }
}

const compare = (a: string | number, b: string | number, isAsc: boolean) => {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);

}
